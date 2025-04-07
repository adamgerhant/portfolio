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
export declare type EngineeringProjectsUpdateFormInputValues = {
    description?: string;
};
export declare type EngineeringProjectsUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EngineeringProjectsUpdateFormOverridesProps = {
    EngineeringProjectsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EngineeringProjectsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EngineeringProjectsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    engineeringProjects?: any;
    onSubmit?: (fields: EngineeringProjectsUpdateFormInputValues) => EngineeringProjectsUpdateFormInputValues;
    onSuccess?: (fields: EngineeringProjectsUpdateFormInputValues) => void;
    onError?: (fields: EngineeringProjectsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EngineeringProjectsUpdateFormInputValues) => EngineeringProjectsUpdateFormInputValues;
    onValidate?: EngineeringProjectsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EngineeringProjectsUpdateForm(props: EngineeringProjectsUpdateFormProps): React.ReactElement;
