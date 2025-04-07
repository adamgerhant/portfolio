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
export declare type ProgrammingProjectsCreateFormInputValues = {
    description?: string;
};
export declare type ProgrammingProjectsCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgrammingProjectsCreateFormOverridesProps = {
    ProgrammingProjectsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgrammingProjectsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgrammingProjectsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgrammingProjectsCreateFormInputValues) => ProgrammingProjectsCreateFormInputValues;
    onSuccess?: (fields: ProgrammingProjectsCreateFormInputValues) => void;
    onError?: (fields: ProgrammingProjectsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgrammingProjectsCreateFormInputValues) => ProgrammingProjectsCreateFormInputValues;
    onValidate?: ProgrammingProjectsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgrammingProjectsCreateForm(props: ProgrammingProjectsCreateFormProps): React.ReactElement;
