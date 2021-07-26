import React, {
  forwardRef,
  Fragment,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal: React.ForwardRefRenderFunction<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
}> = (_, forwardedRef) => {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const btnRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(forwardedRef, () => ({ setOpen, setAnswer }));

  useEffect(() => {
    const observer = new MutationObserver((): void => {
      document.querySelector('header')!.style.width = `calc(100% - ${
        document.documentElement.style.paddingRight || '0px'
      })`;
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    return (): void => {
      observer.disconnect();
    };
  }, []);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" cx="modal" onClose={setOpen} initialFocus={btnRef}>
        <div cx="ctr">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay cx="overlay" />
          </Transition.Child>

          <span cx="fake" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div cx="wrapper">
              <div cx="ans">{answer}</div>

              <div cx="btn-wrapper">
                <button
                  type="button"
                  cx="btn"
                  onClick={(): void => {
                    setOpen(false);
                  }}
                  ref={btnRef}
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default forwardRef(Modal);
