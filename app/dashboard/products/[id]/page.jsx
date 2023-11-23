import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct.module.css';
import Image from 'next/image';

const page = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='user' fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type='hidden' name='id' value={product.id} />
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' placeholder={product.title} />
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' placeholder={product.price} />
          <label htmlFor='stock'>Stock</label>
          <input type='number' name='stock' placeholder={product.stock} />
          <label htmlFor='color'>Color</label>
          <input type='text' name='color' placeholder={product.color} />
          <label htmlFor='size'>Size</label>
          <input type='number' name='size' placeholder={product.size} />
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
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
