import { Inter } from 'next/font/google';
import '@styles/globals.css';
import Header from '@/components/Header';
import Provider from "@components/Provider"

import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '99movies.com',
  description: 'This is a movie database clone',
};

const RootLayout =  ({ children }) =>{
    return (
      <html lang='en'>
        <body className={inter.className}>
          <Provider>
            <Header />
            <Navbar />
            {/* <SearchBox /> */}
            {children}
          </Provider>
        </body>
      </html>
    );
  }
  export default RootLayout