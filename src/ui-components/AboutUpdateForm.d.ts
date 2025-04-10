/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AboutUpdateFormInputValues = {
    Title?: string;
    About?: string;
    Contact?: string;
};
export declare type AboutUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    About?: ValidationFunction<string>;
    Contact?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutUpdateFormOverridesProps = {
    AboutUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    About?: PrimitiveOverrideProps<TextFieldProps>;
    Contact?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AboutUpdateFormProps = React.PropsWithChildren<{
    overrides?: AboutUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    about?: any;
    onSubmit?: (fields: AboutUpdateFormInputValues) => AboutUpdateFormInputValues;
    onSuccess?: (fields: AboutUpdateFormInputValues) => void;
    onError?: (fields: AboutUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AboutUpdateFormInputValues) => AboutUpdateFormInputValues;
    onValidate?: AboutUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AboutUpdateForm(props: AboutUpdateFormProps): React.ReactElement;
