const gulp = require('gulp')
const less = require('gulp-less') // Переводит из less в обычный CSS
const rename = require('gulp-rename') // Добавляет к конечный файлам main.min.js/css в папке dist
const cleanCSS = require('gulp-clean-css') // Минификация файла стилей CSS
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps') // используется для отображения файла со стилями или скриптами из папки src в инструментах разработчика браузера, а не в dist
const babel = require('gulp-babel') // позволяющих преобразовывать код в совместимую версию JavaScript для более старых браузеров
const uglify = require('gulp-uglify') // позволяет минифицировать и оптимизировать код js
const htmlmin = require('gulp-htmlmin') // Позволяет минифицировать HTML
const concat = require('gulp-concat') // собирает все файлы js в один
const del = require('del') // удаляет каталог dist
const imagemin = require('gulp-imagemin') // Сжимает изображения
const size = require('gulp-size'); // Показывает размеры файлов в консоли
const newer = require('gulp-newer'); // Отслеживает только новые файлы
const browsersync = require('browser-sync').create() // Отслежтвание изменений в реальном времени, открытие страницы
const sass = require('gulp-sass')(require('sass')); // Препроцессор SASS и SCSS
const order = require("gulp-order");




// Пути к изначальным файлам и файлам назначения
const paths = {
    html: {
        src: 'src/*.html',
        dest: 'main-page'
    },
    styles: {
        src: ["src/styles/**/*.sass", "src/styles/**/*.scss", "src/styles/**/*.less"],
        src: ["src/styles/**/*.sass"],
        dest: "main-page/css"
    },
    scripts: {
        src: "src/scripts/**/*",
        dest: "main-page/scripts/js"
    },
    images: {
        src: "src/img/**",
        dest: "main-page/img"
    },
    fonts: {
        src: "src/fonts/**",
        dest: "main-page/fonts"
    },

}



// Очистка каталога
function clean() {
    return del(['main-page/**', '!main-page/img', '!main-page/vue', '!main-page/fonts']) // !dist/img исключаем из удаления каталог img
}


function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browsersync.stream())
}

// Задача для обработки стилей
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        // .pipe(less())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: "main",
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.stream())
}

//Задача для обработки скриптов
function scripts() {
    return gulp.src(["src/scripts/sliders/swiper-bundle.min.js",
        "src/scripts/sliders/sliders.js",
        "src/scripts/articles_db.js",
        "src/scripts/plants_db.js",
        "src/scripts/greenbook_db.js",
        "src/scripts/reg.js",
        "src/scripts/auth.js",
        "src/scripts/index.js",
    ]) //paths.scripts.src 
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(size({
            showFiles: true
        }))
        .pipe(concat({ path: 'main.min.js', stat: { mode: 0666 } }))
        // .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browsersync.stream())
}


//Для сжжатия изображений
function img() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(paths.images.dest))
}

// Отслеживание изменений
function watch() {
    browsersync.init({
        server: {
            baseDir: "./main-page/"
        }
    })
    gulp.watch(paths.html.dest).on('change', browsersync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, img)
}

const build = gulp.series(fonts, clean, html, gulp.parallel(styles, scripts, img, fonts), watch)

exports.clean = clean
exports.fonts = fonts
exports.img = img
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.build = build
exports.default = build