import { Categories } from '../config/categoryConfig';
import { CustomEmoji } from '../config/customEmojiConfig';
import { EmojiStyle, SkinTones } from '../types/exposedTypes';
import { DataEmoji, DataEmojis, WithName } from './DataTypes';
export declare function emojiNames(emoji: WithName): string[];
export declare function addedIn(emoji: DataEmoji): number;
export declare function emojiName(emoji?: WithName): string;
export declare function unifiedWithoutSkinTone(unified: string): string;
export declare function emojiUnified(emoji: DataEmoji, skinTone?: string): string;
export declare function emojisByCategory(category: Categories): DataEmojis;
export declare function emojiUrlByUnified(unified: string, emojiStyle: EmojiStyle): string;
export declare function emojiVariations(emoji: DataEmoji): string[];
export declare function emojiHasVariations(emoji: DataEmoji): boolean;
export declare function emojiVariationUnified(emoji: DataEmoji, skinTone?: string): string | undefined;
export declare function emojiByUnified(unified?: string): DataEmoji | undefined;
export declare const allEmojis: DataEmojis;
export declare function setCustomEmojis(customEmojis: CustomEmoji[]): void;
export declare function activeVariationFromUnified(unified: string): SkinTones | null;