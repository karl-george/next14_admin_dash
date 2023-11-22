import styles from '@/app/ui/dashboard/users/singleUser.module.css';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='user' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='JohnDoe@gmail.com' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
          <label htmlFor='username'>Phone</label>
          <input type='text' name='phone' placeholder='+123456789' />
          <label htmlFor='address'>Adress</label>
          <textarea type='text' name='address' placeholder='New York' />
          <label htmlFor='isAdmin'>isAdmin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor='isActive'>isActive?</label>
          <select name='isActive' id='isActive'>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
