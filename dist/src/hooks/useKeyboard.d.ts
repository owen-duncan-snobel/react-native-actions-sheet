import { ScreenRect } from 'react-native';
export declare function useKeyboard(enabled: boolean): {
    keyboardShown: boolean;
    coordinates: Readonly<{
        screenX: 0;
        screenY: 0;
        width: 0;
        height: 0;
    }> | {
        start: undefined | ScreenRect;
        end: ScreenRect;
    };
    keyboardHeight: number;
};
//# sourceMappingURL=useKeyboard.d.ts.map