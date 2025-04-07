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
export declare type WebDevelopmentCreateFormInputValues = {
    description?: string;
};
export declare type WebDevelopmentCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebDevelopmentCreateFormOverridesProps = {
    WebDevelopmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebDevelopmentCreateFormProps = React.PropsWithChildren<{
    overrides?: WebDevelopmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WebDevelopmentCreateFormInputValues) => WebDevelopmentCreateFormInputValues;
    onSuccess?: (fields: WebDevelopmentCreateFormInputValues) => void;
    onError?: (fields: WebDevelopmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebDevelopmentCreateFormInputValues) => WebDevelopmentCreateFormInputValues;
    onValidate?: WebDevelopmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function WebDevelopmentCreateForm(props: WebDevelopmentCreateFormProps): React.ReactElement;
