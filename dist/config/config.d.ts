import * as React from 'react';
import { GetEmojiUrl } from '../components/emoji/BaseEmojiProps';
import { EmojiClickData, EmojiStyle, SkinTonePickerLocation, SkinTones, SuggestionMode, Theme } from '../types/exposedTypes';
import { CategoriesConfig } from './categoryConfig';
import { CustomEmoji } from './customEmojiConfig';
export declare const DEFAULT_SEARCH_PLACEHOLDER = "Search";
export declare const SEARCH_RESULTS_NO_RESULTS_FOUND = "No results found";
export declare const SEARCH_RESULTS_SUFFIX = " found. Use up and down arrow keys to navigate.";
export declare const SEARCH_RESULTS_ONE_RESULT_FOUND: string;
export declare const SEARCH_RESULTS_MULTIPLE_RESULTS_FOUND: string;
export declare function mergeConfig(userConfig?: PickerConfig): PickerConfigInternal;
export declare function basePickerConfig(): PickerConfigInternal;
export declare type PickerConfigInternal = {
    emojiVersion: string | null;
    searchPlaceHolder: string;
    searchPlaceholder: string;
    defaultSkinTone: SkinTones;
    skinTonesDisabled: boolean;
    autoFocusSearch: boolean;
    emojiStyle: EmojiStyle;
    categories: CategoriesConfig;
    theme: Theme;
    suggestedEmojisMode: SuggestionMode;
    lazyLoadEmojis: boolean;
    previewConfig: PreviewConfig;
    className: string;
    height: PickerDimensions;
    width: PickerDimensions;
    style: React.CSSProperties;
    getEmojiUrl: GetEmojiUrl;
    searchDisabled: boolean;
    skinTonePickerLocation: SkinTonePickerLocation;
    unicodeToHide: Set<string>;
    customEmojis: CustomEmoji[];
    reactionsDefaultOpen: boolean;
    reactions: string[];
    open: boolean;
    allowExpandReactions: boolean;
};
export declare type PreviewConfig = {
    defaultEmoji: string;
    defaultCaption: string;
    showPreview: boolean;
};
declare type ConfigExternal = {
    previewConfig: Partial<PreviewConfig>;
    onEmojiClick: MouseDownEvent;
    onReactionClick: MouseDownEvent;
    onSkinToneChange: OnSkinToneChange;
} & Omit<PickerConfigInternal, 'previewConfig' | 'unicodeToHide'>;
export declare type PickerConfig = Partial<ConfigExternal>;
export declare type PickerDimensions = string | number;
export declare type MouseDownEvent = (emoji: EmojiClickData, event: MouseEvent) => void;
export declare type OnSkinToneChange = (emoji: SkinTones) => void;
export {};
