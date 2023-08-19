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
      <span>
        <a
          href={"#" + id}
          className={`inline-block float-left no-underline -ml-7 text-gray-300 dark:text-gray-700 ${
            n == 1 ? "hidden" : ""
          }`}
        >
          #
        </a>
        {text}
      </span>
    );
  };
  return f;
}
