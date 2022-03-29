import {opened, success, failure} from "./card-statuses";

class Card {
    constructor(cardFace) {
        this.currentCard = cardFace.parentNode;
    };

    __getOpenedCards() {
        let openedCards = Array.from(document.getElementsByClassName(opened));
        openedCards = openedCards.filter(function(openedCard) {
            return !openedCard.classList.contains(success);
        }, this);
        return openedCards;
    };

    __openSecondCard(previousOpenedCard) {
        function getEmojiName(card) {
            let emojiName = undefined;	
            card.childNodes.forEach(function(childNode) {
                if (childNode.tagName !== 'DIV') return;
                childNode.classList.forEach(function(className) {
                    if (className.startsWith('emoji')) {
                        emojiName = className;
                    }
                });
            });
            return emojiName;
        }

        let emoji1 = getEmojiName(this.currentCard);
        let emoji2 = getEmojiName(previousOpenedCard);

        let resultClassName = emoji1 === emoji2 ? success : failure;
        this.currentCard.classList.add(resultClassName);
        previousOpenedCard.classList.add(resultClassName);
    };

    __openThirdCard(openedCards) {
        openedCards.forEach(function(elem) {
            if (!elem.classList.contains(success)) {
                elem.classList.remove(opened);
            }
        });

        let failureCards = Array.from(document.getElementsByClassName(failure));
        failureCards.forEach(function(elem) {
            elem.classList.remove(failure);
        });	
    };

    processClick() {
        if (this.currentCard.classList.contains(opened)) return;

        let openedCards = this.__getOpenedCards(); /* only active opened cards, without green (success) cards */

        switch (openedCards.length) {
            case 0:
                /* nothing to do*/;
                break;
            case 1:
                this.__openSecondCard(openedCards[0]);
                break;
            case 2:
                this.__openThirdCard(openedCards);
                break;
            default:
                console.error('too many opened cards');
        }
        this.currentCard.classList.toggle(opened);

        return document.getElementsByClassName(success).length;
    };
};

export default Card;