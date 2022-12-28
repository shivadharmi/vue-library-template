import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { Ref } from 'vue';
import type { VNodeProps } from 'vue';

declare const Image_2: DefineComponent<{
    msg: {
        type: StringConstructor;
        default: string;
    };
}, {
    count: Ref<number>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    msg: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    msg: string;
}>;
export { Image_2 as Image }

export declare interface User {
    id: string;
    name: string;
}

export { }
