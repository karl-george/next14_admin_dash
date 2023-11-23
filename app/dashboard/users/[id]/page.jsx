import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/users/singleUser.module.css';
import Image from 'next/image';

const page = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || '/noavatar.png'} alt='user' fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type='hidden' name='id' value={user.id} />
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' placeholder={user.username} />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder={user.email} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <label htmlFor='username'>Phone</label>
          <input type='text' name='phone' placeholder={user.phone} />
          <label htmlFor='address'>Adress</label>
          <textarea type='text' name='address' placeholder={user.address} />
          <label htmlFor='isAdmin'>isAdmin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor='isActive'>isActive?</label>
          <select name='isActive' id='isActive'>
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
