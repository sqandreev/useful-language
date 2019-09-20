// That's a full bullshit

;(() => {
  "use strict";

  const diagram = document.querySelector(".course__diagram");
  const diagramSpeaking = document.querySelector(".course__content-item--speaking .course__content-percent").innerHTML;
  const diagramReading = document.querySelector(".course__content-item--reading .course__content-percent").innerHTML;
  const diagramWritting = document.querySelector(".course__content-item--writting .course__content-percent").innerHTML;
  const diagramListening = document.querySelector(".course__content-item--listening .course__content-percent").innerHTML;
  const diagramVocabulary = document.querySelector(".course__content-item--vocabulary .course__content-percent").innerHTML;
  const diagramGrammar = document.querySelector(".course__content-item--grammar .course__content-percent").innerHTML;

  const parseIntt = (a, b) => {
    return parseInt(a) + parseInt(b) + "%";
  }

  diagram.style.cssText = `
    background-image: radial-gradient(
      white 50%,
        transparent 51%
      ), 
      conic-gradient(
        #7db0f0 0% ${diagramSpeaking}, 

        #fd8b74 ${diagramSpeaking} ${parseIntt(diagramSpeaking, diagramReading)},

        #b3dd86 ${parseIntt(diagramSpeaking, diagramReading)} ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(diagramWritting) + "%"},

        #bda8f0 ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(diagramReading) + "%"} ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(parseIntt(diagramWritting, diagramListening)) + "%"},

        #ffd876 ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(parseIntt(diagramWritting, diagramListening)) + "%"} ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(parseIntt(diagramWritting, diagramListening)) + parseInt(diagramVocabulary) + "%"},

        #f09fcd ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(parseIntt(diagramWritting, diagramListening)) + parseInt(diagramVocabulary) + "%"} ${parseInt(parseIntt(diagramSpeaking, diagramReading)) + parseInt(parseIntt(diagramWritting, diagramListening)) + parseInt(diagramVocabulary) + parseInt(diagramGrammar) + "%"}
      );
  `;
})();