import { DataEmoji } from '../dataUtils/DataTypes';
export declare type NullableElement = HTMLElement | null;
export declare const EmojiButtonSelector: string;
export declare const VisibleEmojiSelector: string;
export declare function buttonFromTarget(emojiElement: NullableElement): HTMLButtonElement | null;
export declare function isEmojiButton(element: NullableElement): boolean;
export declare function emojiFromElement(element: NullableElement): [DataEmoji, string] | [];
export declare function isEmojiElement(element: NullableElement): boolean;
export declare function categoryLabelFromCategory(category: NullableElement): NullableElement;
export declare function closestCategoryLabel(element: NullableElement): NullableElement;
export declare function elementHeight(element: NullableElement): number;
export declare function emojiTrueOffsetTop(element: NullableElement): number;
export declare function categoryLabelHeight(category: NullableElement): number;
export declare function isEmojiBehindLabel(emoji: NullableElement): boolean;
export declare function queryScrollBody(root: NullableElement): NullableElement;
export declare function emojiDistanceFromScrollTop(emoji: NullableElement): number;
export declare function closestScrollBody(element: NullableElement): NullableElement;
export declare function emojiTruOffsetLeft(element: NullableElement): number;
export declare function unifiedFromEmojiElement(emoji: NullableElement): string | null;
export declare function originalUnifiedFromEmojiElement(emoji: NullableElement): string | null;
export declare function allUnifiedFromEmojiElement(emoji: NullableElement): {
    unified: string | null;
    originalUnified: string | null;
};
export declare function isVisibleEmoji(element: HTMLElement): boolean;
export declare function isHidden(element: NullableElement): boolean;
export declare function allVisibleEmojis(parent: NullableElement): HTMLElement[];
export declare function lastVisibleEmoji(element: NullableElement): NullableElement;
export declare function nextVisibleEmoji(element: HTMLElement): NullableElement;
export declare function prevVisibleEmoji(element: HTMLElement): NullableElement;
export declare function firstVisibleEmoji(parent: NullableElement): NullableElement;
export declare function prevCategory(element: NullableElement): NullableElement;
export declare function nextCategory(element: NullableElement): NullableElement;
export declare function closestCategory(element: NullableElement): NullableElement;
export declare function closestCategoryContent(element: NullableElement): NullableElement;
