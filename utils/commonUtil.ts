export const productImageURL = (image?: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL_API}/${image}`;
};

export const userProfileImageURL = (image?: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL_API}/${image}`;
};

export const isClient = () => typeof window !== "undefined";

export const isServer = () => typeof window === "undefined";

export const getWindow = () => isClient() && window;

export const getBase64 = (file: any): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
