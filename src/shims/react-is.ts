import * as React from 'react';

// Symbols for React 19 / 18 element identification
export const REACT_ELEMENT_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.transitional.element')) ||
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

export const REACT_PORTAL_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.portal')) || 0xeaca;

export const REACT_FRAGMENT_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.fragment')) || 0xeacb;

export const REACT_STRICT_MODE_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.strict_mode')) || 0xeacc;

export const REACT_PROFILER_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.profiler')) || 0xead2;

export const REACT_CONSUMER_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.consumer')) || 0xeac9;

export const REACT_CONTEXT_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.context')) || 0xeace;

export const REACT_FORWARD_REF_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.forward_ref')) || 0xead0;

export const REACT_SUSPENSE_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.suspense')) || 0xead1;

export const REACT_SUSPENSE_LIST_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.suspense_list')) || 0xead8;

export const REACT_MEMO_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.memo')) || 0xead3;

export const REACT_LAZY_TYPE: any =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.lazy')) || 0xead4;

export function typeOf(object: any): any {
  if (typeof object === 'object' && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default:
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_CONSUMER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
  return undefined;
}

export const ContextConsumer = REACT_CONSUMER_TYPE;
export const ContextProvider = REACT_CONTEXT_TYPE;
export const Element = REACT_ELEMENT_TYPE;
export const ForwardRef = REACT_FORWARD_REF_TYPE;
export const Fragment = REACT_FRAGMENT_TYPE;
export const Lazy = REACT_LAZY_TYPE;
export const Memo = REACT_MEMO_TYPE;
export const Portal = REACT_PORTAL_TYPE;
export const Profiler = REACT_PROFILER_TYPE;
export const StrictMode = REACT_STRICT_MODE_TYPE;
export const Suspense = REACT_SUSPENSE_TYPE;
export const SuspenseList = REACT_SUSPENSE_LIST_TYPE;

export function isAsyncMode(): boolean {
  return false;
}

export function isConcurrentMode(): boolean {
  return false;
}

export function isContextConsumer(object: any): boolean {
  return typeOf(object) === REACT_CONSUMER_TYPE;
}

export function isContextProvider(object: any): boolean {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}

export function isElement(object: any): boolean {
  return (
    typeof object === 'object' &&
    object !== null &&
    (object.$$typeof === REACT_ELEMENT_TYPE ||
      (typeof Symbol === 'function' && object.$$typeof === Symbol.for('react.element')))
  );
}

export function isForwardRef(object: any): boolean {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}

export function isFragment(object: any): boolean {
  return (
    typeOf(object) === REACT_FRAGMENT_TYPE ||
    object?.type === REACT_FRAGMENT_TYPE ||
    object?.type === React.Fragment ||
    (typeof Symbol === 'function' && object?.type === Symbol.for('react.fragment'))
  );
}

export function isLazy(object: any): boolean {
  return typeOf(object) === REACT_LAZY_TYPE;
}

export function isMemo(object: any): boolean {
  return typeOf(object) === REACT_MEMO_TYPE;
}

export function isPortal(object: any): boolean {
  return typeOf(object) === REACT_PORTAL_TYPE;
}

export function isProfiler(object: any): boolean {
  return typeOf(object) === REACT_PROFILER_TYPE;
}

export function isStrictMode(object: any): boolean {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

export function isSuspense(object: any): boolean {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

export function isSuspenseList(object: any): boolean {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
}

export function isValidElementType(type: any): boolean {
  return (
    typeof type === 'string' ||
    typeof type === 'function' ||
    type === REACT_FRAGMENT_TYPE ||
    type === REACT_PROFILER_TYPE ||
    type === REACT_STRICT_MODE_TYPE ||
    type === REACT_SUSPENSE_TYPE ||
    type === REACT_SUSPENSE_LIST_TYPE ||
    (typeof type === 'object' &&
      type !== null &&
      (type.$$typeof === REACT_LAZY_TYPE ||
        type.$$typeof === REACT_MEMO_TYPE ||
        type.$$typeof === REACT_CONTEXT_TYPE ||
        type.$$typeof === REACT_CONSUMER_TYPE ||
        type.$$typeof === REACT_FORWARD_REF_TYPE))
  );
}

export default {
  typeOf,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  SuspenseList,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isSuspenseList,
  isValidElementType,
};
