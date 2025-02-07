function printCoord(pt: { x?: number; y?: number }) {
  if (pt.x !== undefined && pt.y !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.error("Incomplete coordinates provided.");
  }
}

function printCoord2(pt: Partial<{ x: number; y: number }>) {
  if (pt.x !== undefined && pt.y !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.error("Incomplete coordinates provided.");
  }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({ });
printCoord2({ x: 3, y: 7 });
printCoord2({ x: 3 });
printCoord2({ });