import * as S from "./fdrInput.styled";

function FdrInput(props) {
  const {
    id,
    height = "40px",
    width = "160px",
    fontSize = "16px",
    labelFontSize = "",
    label,
    value,
    disabled = false,
    dispatch = () => {},
    dispatchType = "update",
    onSearch = () => {},
    className = "",
  } = props;
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <S.FdrInput
      key={id}
      id={id}
      variant="outlined"
      autoComplete="off"
      size="small"
      disabled={disabled}
      InputProps={{
        sx: { height: height, fontSize: fontSize },
      }}
      InputLabelProps={{
        style: {
          fontSize: labelFontSize ? labelFontSize : fontSize,
        },
      }}
      width={width}
      label={label}
      value={value || ""}
      onChange={(e) => dispatch({ type: dispatchType, id: e.target.id, value: e.target.value })}
      className={className}
      onKeyDown={onKeyDown}
    />
  );
}

export default FdrInput;
