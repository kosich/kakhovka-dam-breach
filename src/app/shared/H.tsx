import kebabCase from 'lodash/kebabCase';
import { PropsWithChildren, createElement } from 'react';

export function H(n: number) {
  let f = (props: PropsWithChildren) => {
    let { children, ...p } = props;
    if (typeof children != "string") {
      throw "Unknown child";
    }
    let [text, id] = (children as string).split("#");
    id = id || kebabCase(text);
    return createElement(
      "h" + n,
      { id, ...p },
      <a href={"#" + id} className="no-underline">
        {n - 1 ? (
          <span
            className="float-left text-gray-300 dark:text-gray-700"
            style={{ marginLeft: "-2ch" }}
          >
            &nbsp;#
          </span>
        ) : null}

        {text}
      </a>
    );
  };
  return f;
}
