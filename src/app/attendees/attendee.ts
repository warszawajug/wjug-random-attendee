export class Attendee {
  status: String;
  member: Member;
  rsvp: Rsvp;
}

export class Member {
  id: number;
  name: String;
  photo: Photo;
}

export class Photo {
  thumb_link: String;
}

export class Rsvp {
  response: String;
}
