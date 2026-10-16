'use client';
import React, { useEffect, useRef, useState } from 'react';
export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const closeDialog = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.stopPropagation();

    if (isDeleting) return;

    if (e.target === e.currentTarget) setShowModal(false);
  };

  const deleteProjectHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowModal(false);
      setIsDeleted(true);
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const dialog = dialogRef?.current;

    if (!dialog) return;

    if (showModal && !dialog.open) dialog.showModal();

    if (!showModal && dialog.open) dialog.close();
  }, [showModal]);
  return (
    <section className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-4">
      <button
        ref={triggerRef}
        onClick={() => {
          setShowModal(true);
          setIsDeleted(false);
        }}
        type="button"
        className="py-2 px-4 rounded-md bg-blue-600 hover-bg-blue-600/70 text-white cursor-pointer active:scale-90"
      >
        Delete Project
      </button>

      {isDeleted && <p role="status">Project Nebula has been deleted</p>}

      <dialog
        onClick={closeDialog}
        onCancel={(e: React.SyntheticEvent<HTMLDialogElement>) => {
          e.preventDefault();
          setShowModal(false);
        }}
        onClose={(e: React.SyntheticEvent<HTMLDialogElement>) => {
          e.preventDefault();
          triggerRef.current?.focus();
        }}
        ref={dialogRef}
        className="backdrop:bg-black/50 py-4 px-8 max-w-100 w-[90%] margin-auto fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
      >
        <h2 className="text-2xl py-2">Delete Project Nebula?</h2>
        <div className="py-4">
          <span className="text-justify text-md leading-relaxed">
            Are you sure you want to permanently delete Project Nebula? All associated entries, notebooks, and attachments will be erased immediately. This action cannot be undone.
          </span>

          <div className="flex flex-row items-center justify-between pt-4">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              disabled={isDeleting}
              className="disabled:cursor-not-allowed rounded-md py-2 px-8 cursor-pointer  active:scale-90"
              type="button"
            >
              Cancel
            </button>
            <button
              disabled={isDeleting}
              onClick={deleteProjectHandler}
              className="disabled:cursor-not-allowed bg-orange-800 text-white active:scale-90 hover:bg-orange-800/90 rounded-md py-2 px-8 cursor-pointer"
              type="button"
            >
              {isDeleting ? 'Deleting..' : 'Delete Project'}
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
