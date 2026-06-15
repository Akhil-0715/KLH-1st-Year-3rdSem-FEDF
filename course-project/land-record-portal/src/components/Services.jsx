import ServiceCard from "./ServiceCard";

function Services() {

  const services = [
    {
      title: "Pahani Search",
      description: "Search land records using survey number."
    },
    {
      title: "Mutation Request",
      description: "Apply for ownership transfer online."
    },
    {
      title: "EC Application",
      description: "Apply for encumbrance certificate."
    },
    {
      title: "Status Tracking",
      description: "Track all submitted applications."
    }
  ];

  return (
    <section className="services">

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}

    </section>
  );
}

export default Services;