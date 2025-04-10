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
export declare type ProgrammingProjectsUpdateFormInputValues = {
    description?: string;
};
export declare type ProgrammingProjectsUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgrammingProjectsUpdateFormOverridesProps = {
    ProgrammingProjectsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProgrammingProjectsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgrammingProjectsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    programmingProjects?: any;
    onSubmit?: (fields: ProgrammingProjectsUpdateFormInputValues) => ProgrammingProjectsUpdateFormInputValues;
    onSuccess?: (fields: ProgrammingProjectsUpdateFormInputValues) => void;
    onError?: (fields: ProgrammingProjectsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgrammingProjectsUpdateFormInputValues) => ProgrammingProjectsUpdateFormInputValues;
    onValidate?: ProgrammingProjectsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgrammingProjectsUpdateForm(props: ProgrammingProjectsUpdateFormProps): React.ReactElement;
