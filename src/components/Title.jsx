export function Title(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <h1 className={props.classes ? props.classes : ""}>{props.children}</h1>
    </>
  );
}
