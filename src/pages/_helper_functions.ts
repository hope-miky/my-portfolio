export const onMouseEvent = (
  _mouseApi: any,
  cursorVariant: string,
  cursorPosition: any
) => {
  if (cursorVariant === "default") {
    _mouseApi.start(() => ({
      to: {
        height: 36,
        width: 36,
        x: cursorPosition.x - 13,
        y: cursorPosition.y - 13,
        backgroundColor: "white",
        mixBlendMode: "normal",
      },
      config: {
        friction: 15,
      },
    }));
  } else if (cursorVariant === "menutext") {
    _mouseApi.start(() => ({
      to: {
        height: 60,
        width: 60,
        x: cursorPosition.x - 30,
        y: cursorPosition.y - 30,
        backgroundColor: "rgb(255,192,0)",
        mixBlendMode: "difference",
      },
      config: {
        friction: 15,
      },
    }));
  } else {
    _mouseApi.start(() => ({
      to: {
        height: 150,
        width: 150,
        x: cursorPosition.x - 75,
        y: cursorPosition.y - 75,
        backgroundColor: "rgb(255,192,0)",
        mixBlendMode: "difference",
      },
      config: {
        friction: 15,
      },
    }));
  }
};
