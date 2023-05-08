interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
	article?: boolean;
  }
  
  declare const SEO: ({ title, description, image, article }: SEOProps) => JSX.Element;
  
  export default SEO;
  