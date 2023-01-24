export const EmailForm = () => {
  return (
    <div className="mb-9">
      <label htmlFor="email" className="mb-2 block text-sm text-gray-700">
        メールアドレス<span className="text-lg text-red-400">*</span>
        <div>
          <input
            className="w-full appearance-none rounded-lg border  border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:outline-none focus:outline-blue-400"
            id="email"
            type="email"
            placeholder="mail@example.com"
          />
        </div>
      </label>
    </div>
  );
};

export const PasswordForm = () => {
  return (
    <div className="mb-9">
      <label htmlFor="password" className="mb-2 block text-sm text-gray-700">
        パスワード<span className="text-lg text-red-700">*</span>
        <div>
          <input
            className="w-full appearance-none rounded border  border-gray-400 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="your password"
          />
        </div>
      </label>
    </div>
  );
};

export const InputField = (props) => {
  return (
    <div className="mb-9">
      <label htmlFor="email" className="mb-2 block text-sm text-gray-700">
        メールアドレス<span className="text-lg text-red-400">*</span>
        <div>
          <input
            className="w-full appearance-none rounded-lg border  border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:outline-none focus:outline-blue-400"
            id="email"
            type="email"
            placeholder="mail@example.com"
          />
        </div>
      </label>
    </div>
  );
};
