import { currentUser } from '@clerk/nextjs';
import React from 'react';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';
import AccountProfile from '@/components/forms/AccountProfile';

const page = async () => {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect('/');

  // const userInfo = {};

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? '',
    bio: userInfo ? userInfo?.bio : '',
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  // console.log(user);

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">Complete your profile now, to use Threds.</p>

      <section className="mt-4 bg-dark-1 border border-gray-900 p-10 rounded">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;
