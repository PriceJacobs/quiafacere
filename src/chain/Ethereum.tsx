import type { IconProps } from '../lib';

export function Ethereum(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.37 1277.39"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        fill="#343434"
        d="M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"
      />
      <path fill="#8c8c8c" d="M392.07 0L0 650.54l392.07 231.75V472.33z" />
      <path
        fill="#3c3c3b"
        d="M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"
      />
      <path fill="#8c8c8c" d="M392.07 1277.38V956.52L0 724.89z" />
      <path fill="#141414" d="M392.07 882.29l392.06-231.75-392.06-178.21z" />
      <path fill="#393939" d="M0 650.54l392.07 231.75V472.33z" />
    </svg>
  );
}

export function EthereumMono(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.37 1277.39"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        opacity="0.98"
        d="M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"
      />
      <path opacity="0.85" d="M392.07 0L0 650.54l392.07 231.75V472.33z" />
      <path
        opacity="0.94"
        d="M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"
      />
      <path opacity="0.85" d="M392.07 1277.38V956.52L0 724.89z" />
      <path d="M392.07 882.29l392.06-231.75-392.06-178.21z" />
      <path opacity="0.96" d="M0 650.54l392.07 231.75V472.33z" />
    </svg>
  );
}
