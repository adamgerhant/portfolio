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
export declare type WebDevelopmentUpdateFormInputValues = {
    description?: string;
};
export declare type WebDevelopmentUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WebDevelopmentUpdateFormOverridesProps = {
    WebDevelopmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WebDevelopmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: WebDevelopmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    webDevelopment?: any;
    onSubmit?: (fields: WebDevelopmentUpdateFormInputValues) => WebDevelopmentUpdateFormInputValues;
    onSuccess?: (fields: WebDevelopmentUpdateFormInputValues) => void;
    onError?: (fields: WebDevelopmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WebDevelopmentUpdateFormInputValues) => WebDevelopmentUpdateFormInputValues;
    onValidate?: WebDevelopmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WebDevelopmentUpdateForm(props: WebDevelopmentUpdateFormProps): React.ReactElement;
