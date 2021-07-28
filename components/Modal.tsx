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

  const adjustPadding = (): void => {
    const fake = document.createElement('span');
    const okBtn = document.querySelector<HTMLElement>('#ok-btn')!;

    Array.from(document.querySelectorAll<HTMLElement>('#ans *'))
      .reverse()
      .concat([document.querySelector<HTMLElement>('#ans')!])
      .find((el) => el.innerText.replace(/s/g, '').length > 0)
      ?.appendChild(fake);

    if (fake.offsetLeft + 32 < okBtn.offsetLeft) okBtn.style.marginTop = '-1rem';
  };

  return (
    <Transition as={Fragment} show={open} appear>
      <Dialog as="div" cx="modal" initialFocus={btnRef} onClose={setOpen}>
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

          <span aria-hidden="true" cx="fake">
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
              {/* eslint-disable-next-line react/no-danger */}
              <div cx="ans" dangerouslySetInnerHTML={{ __html: answer }} id="ans" />
              {/* eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text */}
              <img src="" onError={adjustPadding} />

              <div cx="btn-wrapper">
                <button
                  ref={btnRef}
                  cx="btn"
                  id="ok-btn"
                  type="button"
                  onClick={(): void => {
                    setOpen(false);
                  }}
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
