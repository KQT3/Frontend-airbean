<template>
  <div>{{ minutes }} min : {{ seconds }} sek</div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      year: 0,
      month: 0,
      day: 0,
      hr: 0,
      min: 0,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.getDate();
    this.showRemaining();
  },
  methods: {
    getDate() {
      let date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.day = date.getDate();
      this.hr = date.getHours();
      this.min = date.getMinutes();
    },
    showRemaining() {
      const timer = setInterval(() => {
        let now = new Date();
        let end = new Date(this.year, this.month, this.day, this.hr, this.min);
        end.setMinutes(end.getMinutes() + 15);

        let distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.minutes = minutes < 10 ? "0" + minutes : minutes;
        this.seconds = seconds < 10 ? "0" + seconds : seconds;
        this.hours = hours < 10 ? "0" + hours : hours;
        this.days = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  font-size: 150%;
}
</style>
