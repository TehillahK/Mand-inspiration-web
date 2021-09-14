function CompanyIdentity() {
    return (
        <section>
            <h2>Who are we?</h2>
            <p>
                We are a writing service provider that gives publishing guidelines i.e
                consulting, editing, mentoring, self-publishing guide, publish with us
                etc to individuals and organizations around the world.
            </p>
        </section>
    );
}

function OurMission() {
    return (
        <section>
            <h2>Our Mission</h2>
            <p>
                To offer excellent and affordable writing services to everyone who
                desires their story to be read.
            </p>
        </section>
    );
}

function Hours() {
    return (
        <section>
            <h2>Hours of Operations</h2>
            <p>24 hours, 7 days a week</p>
        </section>
    );
}

const PageInfo = () => {
    return (
        <div className={"grid"}>
            <CompanyIdentity />
            <OurMission />
            <Hours />
        </div>
    );
};
export default PageInfo;
