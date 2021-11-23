import { Form, Input, AutoComplete, FormInstance } from "antd";
import React, { useState } from "react";
import style from "./CustomFormField.module.css";
import { countryData } from "../../../static/coutryData/coutryData";

interface Props {
  name: string;
  placeholder: string;
  max?: number;
  formType?: string;
  validate?: boolean;
  autoComplete?: boolean;
  form?: any;
}
const CustomFormField: React.FC<Props> = ({
  placeholder,
  formType = "string",
  max = 50,
  name,
  validate = false,
  autoComplete = false,
  form,
}) => {
  //HOOKS
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  //AUTOCOMPLETE
  const onSelect = (value: string) => {
    form.setFieldsValue({ [selected]: value });
  };
  const handleSearch = (value: string) => {
    setOptions(!value ? [] : [...countryData]);
  };
  return (
    <Form.Item
      name={name}
      rules={[
        { required: validate, message: `Enter a ${placeholder}` },
        { type: formType === "email" ? "email" : "string" },
      ]}
    >
      <span className={style.inputContainer}>
        {autoComplete ? (
          <AutoComplete
            options={options}
            onSelect={onSelect}
            onChange={(e) => setSelected(e)}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSearch={handleSearch}
          >
            <Input
              name={name}
              placeholder={placeholder}
              bordered={false}
              size="large"
              allowClear
              maxLength={max}
              type={formType}
              onChange={(e) => setSelected(e.target.name)}
            />
          </AutoComplete>
        ) : (
          <Input
            placeholder={placeholder}
            bordered={false}
            size="large"
            allowClear
            maxLength={max}
            type={formType}
          />
        )}
      </span>
    </Form.Item>
  );
};

export default CustomFormField;
