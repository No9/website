(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,a){"use strict";a.r(t);a(65);var r=a(0),n=a.n(r),o=a(183),l=a(98),s=function(e){var t=e.title,a=e.subtext,r=e.author,o=e.date,s=(e.image,e.slug);return n.a.createElement(l.Link,{className:"blog-link",to:s},n.a.createElement("div",{className:"wide-blog-container"},n.a.createElement("div",{className:"wide-blog-image-container"},n.a.createElement("img",{className:"wide-blog-image",src:"https://miro.medium.com/max/2800/1*AmrAV709WQFlXgs4R4zZEw.jpeg"})),n.a.createElement("h2",{className:"wide-blog-title"},t),n.a.createElement("p",{className:"wide-blog-subtext"},a),n.a.createElement("p",{className:"wide-blog-author"},"by ",r),n.a.createElement("p",{className:"wide-blog-date"},"Posted ",o)))},i=a(9),c=a.n(i),m=a(271),u=function(e){var t=e.title,a=e.subtext,r=e.author,o=e.date,s=e.slug;return n.a.createElement(l.Link,{className:"blog-link",to:s},n.a.createElement("div",{className:"blog-container"},n.a.createElement("h2",{className:"blog-title"},t),n.a.createElement("p",{className:"blog-subtext"},a),n.a.createElement("p",{className:"blog-author"},"by ",r),n.a.createElement("p",{className:"blog-date"},"Posted ",o)))},d=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.generateBlogs=function(){return this.props.blogs.map(function(e){return n.a.createElement(u,{title:e.frontmatter.title,subtext:e.excerpt.replace(e.frontmatter.title,"").replace("By "+e.frontmatter.author,"").replace("Posted",""),author:e.frontmatter.author,date:e.frontmatter.date,slug:e.fields.slug})})},a.render=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"blog-grid"},this.generateBlogs()))},t}(r.Component),p=function(){return n.a.createElement(l.StaticQuery,{query:"3520700645",render:function(e){var t=[];return e.allMarkdownRemark.nodes.forEach(function(e){t=t.concat(e)}),n.a.createElement(d,{blogs:t})},data:m})};a.d(t,"query",function(){return g});var g="1515353985";t.default=function(e){var t=e.data;return n.a.createElement(o.a,{title:"Appsody - Blogs"},n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"blog-card-section"},n.a.createElement("h2",null,"Latest Blog"),n.a.createElement(s,{image:t.allMarkdownRemark.nodes[0].frontmatter.imagePath,title:t.allMarkdownRemark.nodes[0].frontmatter.title,subtext:t.allMarkdownRemark.nodes[0].excerpt.replace(t.allMarkdownRemark.nodes[0].frontmatter.title,""),author:t.allMarkdownRemark.nodes[0].frontmatter.author,date:t.allMarkdownRemark.nodes[0].frontmatter.date,slug:t.allMarkdownRemark.nodes[0].fields.slug}))),n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"all-blogs-section"},n.a.createElement("h2",null,"All Blogs"),n.a.createElement(p,null))))}},271:function(e){e.exports={data:{allMarkdownRemark:{nodes:[{fields:{slug:"/blogs/AutumnUpdate/"},frontmatter:{title:"Appsody in Autumn: project update",date:"5 months ago",author:"David Harris"},excerpt:"Appsody in Autumn: project updateIt’s been a busy couple of months since we publicly launched as an open source project, full of…"},{fields:{slug:"/blogs/BohemianAppsody/"},frontmatter:{title:"Bohemian Appsody — a song for Kubernetes",date:"7 months ago",author:"David Harris"},excerpt:"Bohemian Appsody — a song for KubernetesHow can you have an open source project without a theme tune? An anthem for collaborators…"},{fields:{slug:"/blogs/BuildingCloudNativeAppsWithAppsody/"},frontmatter:{title:"Building Cloud-Native Apps with Appsody",date:"7 months ago",author:"Chris Bailey"},excerpt:"Building Cloud-Native Apps with AppsodyAppsody provides a set of open source tools and capabilities that simplifies the process of…"}]}}}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-ce7971efd87419200f6b.js.map