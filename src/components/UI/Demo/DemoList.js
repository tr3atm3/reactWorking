import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items } = props;
  console.log(items.sort((a, b) => a - b));
  const dscSortedList = useMemo(() => {
    return items.sort((a, b) => b - a);
  }, [items]);
  const ascSortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  //

  const toShow = () => {
    // console.log(props.sorted === "asc");
    if (props.sorted === "asc") {
      return ascSortedList;
    } else {
      return dscSortedList;
    }
  };
  //   console.log(toShow());
  console.log(ascSortedList);
  console.log(dscSortedList);
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {toShow().map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
