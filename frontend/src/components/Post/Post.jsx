import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import PostForm from './PostForm';

const Post = ({ open, setOpen }) => {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gradient-to-b from-violet-700 to-rose-500 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h1" className="p-3 text-center font-semibold text-gray-900">
                    Create New Post
                  </DialogTitle>
                  <PostForm onClose={setOpen}></PostForm>
                </div>
              </div>
            </div>
            <button
              type="button"
              data-autofocus
              onClick={() => setOpen(false)}
              className="float-end m-5 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}


export default Post;