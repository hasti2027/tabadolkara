import styles from "./AllServices.module.css";

async function fetchServices() {
  const services = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(services);
  return services;
}

async function AllServices() {
  return (
    <div className={styles.allServices}>
      <p>خدمات سایت </p>
    </div>
  );
}
export default AllServices;
