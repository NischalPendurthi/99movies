import Results from '@/components/Results';
import Feed from '@components/Feed'
const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Watch
      <br className="max-md:hidden " />
      <span className="orange_gradient text-center">
        South Indian Movies
      </span>
      </h1>
      <p className="desc text-center">
      Movie Mania is a comprehensive online platform that caters to the needs of ardent movie enthusiasts.
      </p>
      <Feed />
    </section>
  )
}

export default page