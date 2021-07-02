const Input = ({ text, name, checked, changed }) => {
  return (
    <label>
      <input name={name} type="checkbox" checked={checked} onChange={changed} />
      {text}
    </label>
  );
};

export default Input;

//TODO: rework to proper reusable comp
