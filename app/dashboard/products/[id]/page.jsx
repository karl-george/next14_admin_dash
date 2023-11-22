import styles from '@/app/ui/dashboard/products/singleProduct.module.css';
import Image from 'next/image';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='user' fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' placeholder='John Doe' />
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' placeholder='JohnDoe@gmail.com' />
          <label htmlFor='stock'>Stock</label>
          <input type='number' name='stock' placeholder='23' />
          <label htmlFor='color'>Color</label>
          <input type='text' name='color' placeholder='White' />
          <label htmlFor='size'>Size</label>
          <input type='number' name='size' placeholder='2' />
          <label htmlFor='cat'>Choose a Category</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computer</option>
          </select>
          <label htmlFor='desc'>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows='10'
            placeholder='Description'
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
