import { Calendar, MapPin, Clock } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "NUS Arts Festival 2026",
    date: "2026-02-15",
    time: "19:00",
    venue: "University Cultural Centre, NUS",
    location: "Singapore",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Indonesian Night 2026",
    date: "2026-03-08",
    time: "18:30",
    venue: "NUSS Kent Ridge Guild House",
    location: "Singapore",
    status: "upcoming",
  },
];

const pastEvents = [
  {
    id: 3,
    title: "Rayuan Gila Single Launch",
    date: "2025-10-20",
    venue: "Online Release Party",
    location: "Virtual",
  },
  {
    id: 4,
    title: "Hidup Di Dunia Album Launch",
    date: "2024-07-15",
    venue: "NUS Student Union",
    location: "Singapore",
  },
  {
    id: 5,
    title: "Indonesian Cultural Night 2024",
    date: "2024-04-20",
    venue: "University Town Auditorium",
    location: "Singapore",
  },
  {
    id: 6,
    title: "Freshman Orientation Concert",
    date: "2023-08-12",
    venue: "PGPR Multi-Purpose Hall",
    location: "Singapore",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Live <span className="text-gradient">Shows</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk nonton kita live! Cek jadwal konser dan acara kami.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Upcoming Shows
            </h3>
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-card-gradient border border-primary/30 rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date Badge */}
                    <div className="shrink-0 w-20 h-20 bg-primary/10 rounded-xl flex flex-col items-center justify-center border border-primary/20">
                      <span className="text-2xl font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs text-primary uppercase font-semibold">
                        {new Date(event.date).toLocaleDateString("id-ID", { month: "short" })}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-sm">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          <span className="text-sm">{event.venue}, {event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <span className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-muted-foreground">
            Past Shows
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-card border border-border rounded-xl p-5 hover:bg-muted/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 bg-muted rounded-lg flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleDateString("id-ID", { month: "short" })}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 truncate">{event.title}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} />
                      {event.venue}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(event.date).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
