import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Welcome: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">What's your name?</h1>
        <p className="mb-4">We're happy you're here. Let's get to know a little about you.</p>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Username:</td>
                <td className="border px-4 py-2">
                  <input
                    className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between">

        <button type="button" onClick={()=>router.push('/')}
            className="bg-purple-400 hover:bg-purple-800 text-white font-bold py-2 px-6 border border-purple-950 rounded">
              Back
            </button>
          <button
          type="button" onClick={()=>router.push('/options')}
            className="bg-purple-400 hover:bg-purple-800 text-white font-bold py-2 px-6 border border-purple-950 rounded"
            disabled={!username}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;