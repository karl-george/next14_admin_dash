import styles from '@/app/ui/dashboard/users/addUser.module.css';

const page = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='Username' name='username' required />
        <input type='email' placeholder='Email' name='email' required />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input type='phone' placeholder='Phone' name='phone' />
        <select name='isAdmin' id='isAdmin'>
          <option value={false} selected>
            is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value={true} selected>
            is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name='address'
          id='desc'
          rows='16'
          placeholder='Address'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default page;
