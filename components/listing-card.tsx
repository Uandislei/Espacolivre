import Link from "next/link";

type Listing = {
  id: string;
  title: string | null;
  listing_type: string | null;
  market_category: string | null;
  city: string | null;
  city_name: string | null;
  image_url: string | null;
  image_urls: string[] | null;
  price_label: string | null;
  price_per_hour: number | null;
  price_per_day: number | null;
  capacity: number | null;
  verified_host: boolean | null;
};

const labels: Record<string,string> = {
  space: "Espaço",
  equipment: "Equipamento",
  event_item: "Item para evento",
};

function imageOf(listing: Listing) {
  return listing.image_url || listing.image_urls?.[0] || null;
}

export function ListingCard({ listing }: { listing: Listing }) {
  const image = imageOf(listing);
  const location = listing.city_name || listing.city || "Localização não informada";
  const price = listing.price_label
    || (listing.price_per_hour ? `R$ ${listing.price_per_hour}/hora` : "")
    || (listing.price_per_day ? `R$ ${listing.price_per_day}/dia` : "")
    || "Consulte o valor";

  return (
    <Link className="listing-card" href={`/anuncios/${listing.id}`}>
      <div className="listing-image">
        {image ? <img src={image} alt={listing.title || "Anúncio"} /> : <span>Espaço Livre</span>}
      </div>
      <div className="listing-content">
        <div className="listing-meta">
          <span className="chip">{listing.market_category || labels[listing.listing_type || "space"]}</span>
          {listing.verified_host ? <span className="verified">Verificado</span> : null}
        </div>
        <h3>{listing.title || "Anúncio sem título"}</h3>
        <p className="muted">{location}{listing.capacity ? ` · até ${listing.capacity} pessoas` : ""}</p>
        <strong>{price}</strong>
      </div>
    </Link>
  );
}
