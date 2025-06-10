document.addEventListener("DOMContentLoaded", () => {
  const rubyRegex = /\{([\u4e00-\u9fff]+)\|([^\}]+)\}/g;

  const walkTextNodes = (node) => {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];

    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    for (const textNode of textNodes) {
      const parent = textNode.parentNode;
      const originalText = textNode.nodeValue;

      if (!rubyRegex.test(originalText)) continue;

      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      rubyRegex.lastIndex = 0; // Reset regex state
      let match;
      while ((match = rubyRegex.exec(originalText)) !== null) {
        // Append text before match
        if (match.index > lastIndex) {
          fragment.appendChild(document.createTextNode(originalText.slice(lastIndex, match.index)));
        }

        // Create <ruby> node
        const ruby = document.createElement("ruby");
        ruby.textContent = match[1];

        const rt = document.createElement("rt");
        rt.textContent = match[2];
        ruby.appendChild(rt);

        fragment.appendChild(ruby);
        lastIndex = rubyRegex.lastIndex;
      }

      // Append remaining text
      if (lastIndex < originalText.length) {
        fragment.appendChild(document.createTextNode(originalText.slice(lastIndex)));
      }

      // Replace the original text node
      parent.replaceChild(fragment, textNode);
    }
  };

  const applyRuby = () => {
    const content = document.querySelector(".md-content");
    if (content) walkTextNodes(content);
  };

  applyRuby();

  // 监听内容变化（防止 PJAX/instant page 等影响）
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        applyRuby();
        break;
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
