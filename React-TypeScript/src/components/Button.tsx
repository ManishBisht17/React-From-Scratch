import React, { useState } from "react";

interface MyButtonProps {
  text: string;
}
interface book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { text } = props;
  const [value, setValue] = useState<string | undefined>();
  const handleNaneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleNaneChange}
        type="text"
        placeholder="Enter yout name"
        value={value}
      />
      <h1>{value}</h1>
    </div>
  );
};
export default MyButton;
