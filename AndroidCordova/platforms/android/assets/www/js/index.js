/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    bindEvents: function () {
      /* var xmlhttp = new XMLHttpRequest();
                // swap out URL for manifest.json hosted on India Today's Servers
                var url = "http://feeds.intoday.in/aajtak/embedfeeds/atlite.json";

                xmlhttp.onreadystatechange=function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var arr = JSON.parse(xmlhttp.responseText);
                    window.location.assign(arr.app-item.items.url);
                    document.getElementById("h1-tag").innerHTML = arr.app-item.name;
                    document.getElementById("error").innerHTML = arr.error;
                    document.getElementById("icon-swap").innerHTML = arr.image;
                    }
                }
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
              document.addEventListener("deviceready", onDeviceReady, false);
              function onDeviceReady() {
                if (navigator.network.connection.type == Connection.NONE) {
                  networkError()
                } else {
                  console.log("Working as expected.")
                }
              }
      */
              function networkError() {
                navigator.notification.alert('ATLite requires an internet connection')
                var $net = document.createElement('div')
                $net.innerHTML = 'ATLite requires an internet connection'
                document.body.appendChild($net)
              }

          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-79491536-1', 'auto');
          ga('send', 'pageview');
      }
};

app.initialize();
// commented out JSON above for this line of code for WebView of AajTakLite fake loading
var timer = setTimeout(function() {
  window.location.assign("https://aajtaklite.com");
}, 5000);