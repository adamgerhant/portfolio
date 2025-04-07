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
export declare type EngineeringProjectsCreateFormInputValues = {
    description?: string;
};
export declare type EngineeringProjectsCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngineeringProjectsCreateFormOverridesProps = {
    EngineeringProjectsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngineeringProjectsCreateFormProps = React.PropsWithChildren<{
    overrides?: EngineeringProjectsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EngineeringProjectsCreateFormInputValues) => EngineeringProjectsCreateFormInputValues;
    onSuccess?: (fields: EngineeringProjectsCreateFormInputValues) => void;
    onError?: (fields: EngineeringProjectsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngineeringProjectsCreateFormInputValues) => EngineeringProjectsCreateFormInputValues;
    onValidate?: EngineeringProjectsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EngineeringProjectsCreateForm(props: EngineeringProjectsCreateFormProps): React.ReactElement;
